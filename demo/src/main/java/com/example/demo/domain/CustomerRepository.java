package com.example.demo.domain;

import org.springframework.data.repository.CrudRepository;
import java.util.List;


public interface CustomerRepository extends CrudRepository<CustomerInfo, Long> {

    List<CustomerInfo> findByLastName(String lastName);
}
