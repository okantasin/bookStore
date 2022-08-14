package com.bookstore.api.core.exceptions;

import com.bookstore.api.core.models.ApiErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.TypeMismatchException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@ControllerAdvice
@Slf4j
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?> handleNotFoundExceptions(NotFoundException ex, WebRequest request) {

        var response = new ApiErrorResponse<>();

        response.setHttpStatus(HttpStatus.NOT_FOUND);
        response.setStatusCode(HttpStatus.NOT_FOUND.value());
        response.setPath(request.getDescription(false));
        response.setErrors(Arrays.asList(ex.getMessage()));

        log.error(
                response.toString()
        );
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
    }

    @Override
    protected ResponseEntity<Object> handleTypeMismatch(TypeMismatchException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        // return super.handleTypeMismatch(ex, headers, status, request);

        var response = new ApiErrorResponse<>();
        response.setPath(request.getDescription(false));
        response.setErrors(Arrays.asList(ex.getMessage(), "Required Type:" + ex.getRequiredType()));
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @Override
    protected ResponseEntity<Object> handleMissingPathVariable(MissingPathVariableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        // return super.handleMissingPathVariable(ex, headers, status, request);

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("MissingPathVariables");
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        // return super.handleMethodArgumentNotValid(ex, headers, status, request);
        List<String> errors = new ArrayList<>();
        errors.add(String.format("Number of errors: %s", ex.getErrorCount()));

        for (var fieldError : ex.getBindingResult().getFieldErrors()) {
            errors.add(fieldError.getField() + ": " + fieldError.getDefaultMessage() + "Rejected Value:" + fieldError.getRejectedValue());

        }
        var response = new ApiErrorResponse<>();
        response.setPath(request.getDescription(false));
        response.setMessage("Validation Failed");
        response.setErrors(errors);
        log.error(response.toString());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
}
