package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.domain.CustomerInfo;
import com.example.demo.domain.CustomerRepository;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {
    private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(CustomerRepository repository) {
        return args -> {
            //save a couple cust
            repository.save(new CustomerInfo("Fah", "Priya"));
            repository.save(new CustomerInfo("Mike", "Cioce"));
            repository.save(new CustomerInfo("Ben", "Garcia"));
            repository.save(new CustomerInfo("Maurice", "Hunter"));
            repository.save(new CustomerInfo("Ashley", "Newkirk"));

            // read all cust
            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            for (CustomerInfo customer : repository.findAll()) {
                log.info(customer.toString());
            }
            log.info("");

            //read an individual just by ID
            repository.findAllById(1L)
                    .ifPresent(customer -> {
                        log.info("Customer found with findByID(1L):");
                        log.info("---------------------------------");
                        log.info("");
                    });

        };
    };

}
