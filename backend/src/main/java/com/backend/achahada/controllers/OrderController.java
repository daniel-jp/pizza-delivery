package com.backend.achahada.controllers;

import com.backend.achahada.dto.OrderDTO;
import com.backend.achahada.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/orders")
public class OrderController {
    @Autowired
    public OrderService service;

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll(){

        List<OrderDTO> list= service.findAll();
        return  ResponseEntity.ok().body(list);
    }
}
