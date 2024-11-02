package com.frog.api.frogapi.model;

import java.awt.geom.Point2D;

public class Fly implements Insect{
    private Point2D coord;
    private int points;

    // make the fly with coordinate
    public Fly(double x, double y, int points){
        this.coord = new Point2D.Double(x, y);
        this.points = points;
    }

    @Override
    public Point2D.Double getCoord() {
        return null;
    }

    @Override
    public int getPoints() {
        return 0;
    }
}
