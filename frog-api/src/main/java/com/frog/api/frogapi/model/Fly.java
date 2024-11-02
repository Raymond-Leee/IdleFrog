package com.frog.api.frogapi.model;

import java.awt.geom.Point2D;

public class Fly {
    private Point2D coord;


    // make the fly with coordinate
    public Fly(double x, double y){
        this.coord = new Point2D.Double(x, y);
    }
}
