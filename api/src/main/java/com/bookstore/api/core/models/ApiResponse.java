package com.bookstore.api.core.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.SuperBuilder;
import org.springframework.http.HttpStatus;

import java.sql.Timestamp;

@Data // Lombok annotation to generate getters and setters
@SuperBuilder  // Builder pattern: We can use builder pattern to create a new instance of ApiResponse class.
@AllArgsConstructor // Lombok annotation to generate constructor with all fields
public class ApiResponse<T> {
    private HttpStatus httpStatus;
    private int statusCode;
    private String message;
    private T data;
    private Timestamp timestamp;

    // Initialize ApiResponse class with default values
    public ApiResponse() {
        this.httpStatus = HttpStatus.OK;
        this.statusCode = 200;
        this.message = "Success";
        this.timestamp = new Timestamp(System.currentTimeMillis());
    }

    // Initialize ApiResponse class with custom values
    public ApiResponse(T data) {
        this();
        this.setData(data);
    }


    //default_OK: It is used by default..
    public static <T> ApiResponse<T> default_OK(T data) {
        ApiResponse<T> apiResponse = new ApiResponse<>(data);
        return apiResponse;
    }


    /*default_CREATED: It is used when a new resource is created.
     * The different ones were set.
     */
    public static <T> ApiResponse<T> default_CREATED(T data) {
        ApiResponse<T> apiResponse = new ApiResponse<>(data);
        apiResponse.setHttpStatus(HttpStatus.CREATED);
        apiResponse.setStatusCode(HttpStatus.CREATED.value());
        return apiResponse;
    }

    /*default_ACCEPTED: It is used when a new resource is created.
     * The different ones were set.
     */
    public static <T> ApiResponse<T> default_ACCEPTED(T data) {
        ApiResponse<T> apiResponse = new ApiResponse<>(data);
        apiResponse.setHttpStatus(HttpStatus.ACCEPTED);
        apiResponse.setStatusCode(HttpStatus.ACCEPTED.value());
        return apiResponse;
    }

    /*default_NO_CONTENT: It is used when a new resource is created.
     * The different ones were set.
     */
    public static <T> ApiResponse<T> default_NO_CONTENT(T data) {
        ApiResponse<T> apiResponse = new ApiResponse<>(data);
        apiResponse.setHttpStatus(HttpStatus.NO_CONTENT);
        apiResponse.setStatusCode(HttpStatus.NO_CONTENT.value());
        return apiResponse;

    }
}
