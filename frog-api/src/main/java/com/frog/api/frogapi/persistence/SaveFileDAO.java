package com.frog.api.frogapi.persistence;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.io.File;

public class SaveFileDAO {
    private File file;

    @Autowired
    public SaveFileDAO(@Value("{$save.json}") String filename){

    }


}
