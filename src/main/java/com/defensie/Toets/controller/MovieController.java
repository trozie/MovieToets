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

    // als dit opgeroepen wordt, geeft het een lijst met alle series/films terug.
    @RequestMapping(value = "/getMovieList", method = RequestMethod.GET)
    public Iterable<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    // hiermee wordt een film toegevoegd.
    @RequestMapping(value = "/addMovie", method = RequestMethod.POST)
    public Movie addMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    // hiermee kan je een film neerzetten als gezien
    // nog niet toegevoegd
    @RequestMapping(value = "/seenMovie", method = RequestMethod.POST)
    public Movie seenMovie(@RequestBody int id) {
        Movie movie = movieRepository.findOne(id);
        movie.setMovieSeen(true);
        return movieRepository.save(movie);
    }

    // hiermee kan je een film verwijderen
    // nog niet toegevoegd
    @RequestMapping(value = "/removeGuest/{id}", method = RequestMethod.DELETE)
    public void removeMovie(@PathVariable int id) {
        movieRepository.delete(id);
    }

}
