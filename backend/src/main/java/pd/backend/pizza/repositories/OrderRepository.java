package pd.backend.pizza.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import pd.backend.pizza.entities.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products  WHERE obj.status = 0 ORDER BY obj.moment ASC")
    List<Order> findOrdersWithProducts();
}
