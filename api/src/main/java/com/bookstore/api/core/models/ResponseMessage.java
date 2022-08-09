package com.bookstore.api.core.models;

import java.sql.Timestamp;
import java.util.Date;

public class ResponseMessage {
    private static final Timestamp timestamp = new Timestamp(new Date().getTime());
    private static final String message = "Success";
    private static final String fail = "Fail";
}
