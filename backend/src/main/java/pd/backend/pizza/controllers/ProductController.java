package pd.backend.pizza.controllers;

import pd.backend.pizza.dto.ProductDTO;
import pd.backend.pizza.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
    @Autowired
    public ProductService service;


    @GetMapping
    public ResponseEntity<List<ProductDTO>> findAll(){
        List<ProductDTO> list= service.findAll();
        return  ResponseEntity.ok().body(list);
    }
}
