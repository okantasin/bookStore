package com.bookstore.api.core.models;

import java.sql.Timestamp;
import java.util.Date;

public class ResponseMessage {

    public static  Timestamp timestamp = new Timestamp(new Date().getTime());
    public static  String success = "Success";
    public static  String fail = "Fail";
}
