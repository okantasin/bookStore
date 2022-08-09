package com.bookstore.api.core.models;

import org.springframework.http.HttpStatus;

import java.sql.Timestamp;

public class ApiResponse <T>{
    private HttpStatus httpStatus;
    private int statusCode;
    private String message;
    private T data;
    private Timestamp timestamp;

}
