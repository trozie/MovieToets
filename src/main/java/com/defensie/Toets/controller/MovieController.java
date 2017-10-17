package com.defensie.Toets.controller;

import com.defensie.Toets.model.Movie;
import com.defensie.Toets.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @RequestMapping(value = "/getMovieList", method = RequestMethod.GET)
    public Iterable<Movie> getAllMovies() {
        List<Movie> list = new ArrayList<>();
        movieRepository.findAll().forEach(list::add);
        return list;
    }

    @RequestMapping(value = "/addMovie", method = RequestMethod.POST)
    public Movie addMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    @RequestMapping(value = "/seenMovie", method = RequestMethod.POST)
    public Movie seenMovie(@RequestBody int id) {
        Movie movie = movieRepository.findOne(id);
        movie.setMovieSeen(true);
        return movieRepository.save(movie);
    }

    @RequestMapping(value = "/removeGuest/{id}", method = RequestMethod.DELETE)
    public void removeMovie(@PathVariable int id) {
        movieRepository.delete(id);
    }

}
