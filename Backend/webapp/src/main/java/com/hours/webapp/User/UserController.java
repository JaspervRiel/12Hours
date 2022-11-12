package com.hours.webapp.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository userresp;
    @RequestMapping("/")
    public String helloworld(){
        return "hello world";
    }
    @GetMapping("/getUser")
    List<User> gettuser(){

        return userresp.findAll();

    }
    @PostMapping("/createUser")
    User createUser(User user){
        return userresp.save(user);
    }

}
