package com.defensie.Toets.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Movie {


    // genereert automatisch een id, en verwacht twee dingen zoals een naam en of je de film gezien hebt.
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String movieName;
    private boolean movieSeen;


    // empty constructor
    public Movie() {}


    // getters and setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public boolean isMovieSeen() {
        return movieSeen;
    }

    public void setMovieSeen(boolean movieSeen) {
        this.movieSeen = movieSeen;
    }
}
