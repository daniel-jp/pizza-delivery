package com.backend.pizza.services;

import com.backend.pizza.dto.OrderDTO;
import com.backend.pizza.dto.ProductDTO;
import com.backend.pizza.entities.Order;
import com.backend.pizza.entities.Product;
import com.backend.pizza.enums.OrderStatus;
import com.backend.pizza.repositories.OrderRepository;
import com.backend.pizza.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;
    @Autowired
    private ProductRepository productRepository;

    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll(){
        List<Order> list = repository.findOrdersWithProducts();
        return list.stream().map(OrderDTO::new).collect(Collectors.toList());
       // return list.stream().map(x-> new OrderDTO(x)).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insertOrderAndProduct( OrderDTO dto){

        Order order = new Order(null,
                dto.getAddress(),
                dto.getLatitude(),
                dto.getLongitude(),
                Instant.now(), OrderStatus.PENDING);

        for (ProductDTO pd : dto.getProducts()){
            Product product = productRepository.getOne(pd.getId());
            order.getProducts().add(product);
        }
        order= repository.save(order);

        return  new OrderDTO(order);
    }


    @Transactional
    public OrderDTO setDelivered( Long id){
        Order order = repository.getOne(id);
        order.setStatus(OrderStatus.DELIVERED);
        order = repository.save(order);
        return  new OrderDTO(order);
    }
}
