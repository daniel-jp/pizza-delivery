package com.backend.achahada.services;

import com.backend.achahada.dto.OrderDTO;
import com.backend.achahada.entities.Order;
import com.backend.achahada.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;
    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }
    @Transactional(readOnly = true)
    public List<OrderDTO> findAll(){
        List<Order> list = repository.findOrdersWithProducts();
       // return list.stream().map(OrderDTO::new).collect(Collectors.toList());
        return list.stream().map(x-> new OrderDTO(x)).collect(Collectors.toList());
    }
}
