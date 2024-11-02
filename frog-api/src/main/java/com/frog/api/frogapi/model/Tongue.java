package com.frog.api.frogapi.model;

import java.awt.geom.Point2D;

public class Tongue {
    private Point2D coord;
    private int width;
    public Tongue(double x, double y, int width){
        this.coord = new Point2D.Double(x, y);
        this.width = width;
    }

}
