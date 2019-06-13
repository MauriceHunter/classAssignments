package com.example.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

//lets springboot know that customer classes are an entity stored in db. also indicated that customer is jpa entity. assumed entity will be mapped to a table names customer
@Entity
public class CustomerInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public CustomerInfo(String firstName, String lastName){
        this.firstName = firstName;
        this.firstName = lastName;
    }

    @Override
    public String toString() {
        return "CustomerInfo{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }

    //typically you dont need to provide because Java provides by default. You can tell this is the way it is because thats how it is. uses this to create a new instance via persistence framework.
    private CustomerInfo() {
        //@Entity needs a no arg constructor
    }
}
