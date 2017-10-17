package com.defensie.Toets.controller;

import com.defensie.Toets.model.Movie;
import com.defensie.Toets.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @RequestMapping(value = "/addMovie", method = RequestMethod.POST)
    public Movie addMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    @RequestMapping(value = "/removeGuest/{id}", method = RequestMethod.DELETE)
    public void removeMovie(@PathVariable int id) {
        movieRepository.delete(id);
    }

}
