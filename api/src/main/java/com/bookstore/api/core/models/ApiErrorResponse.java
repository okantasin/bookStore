package com.bookstore.api.core.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.http.HttpStatus;

import java.util.List;

@Data
@AllArgsConstructor
@ToString // Lombok annotation to generate toString method
public class ApiErrorResponse<T> extends ApiResponse<T> {
    private String path;
    private List<String> errors;


    // Initialize ApiErrorResponse class with default values
    public ApiErrorResponse() {
        super();
        this.setHttpStatus(HttpStatus.BAD_REQUEST);
        this.setStatusCode(HttpStatus.BAD_REQUEST.value());
        this.setMessage(ResponseMessage.fail);
    }

}
