package com.frog.api.frogapi.persistence;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.io.File;
import java.io.IOException;

public class SaveFileDAO {
    private File file;

    @Autowired
    public SaveFileDAO(@Value("{$save.json}") String filename){
        this.file = new File(filename);
    }

    /**
     * Load data from the file
     * @return
     */
//    private boolean load() throws IOException{
//
//    }
}
