package com.hours.webapp.User;

import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.*;
public class UserTest {


    @org.junit.Test
    public void testGetByID(){
        ArrayList<UserDTO> listUsers = new ArrayList<>();
        listUsers.add(new UserDTO(1,"Jasper","van Riel",19,"222jvr@gmail.com"));
        listUsers.add(new UserDTO(2,"Ruben","Bernards",20,"rb@gmail.com"));
        UserDTO testuser = listUsers.get(0);
        int testID= testuser.getId();
        Assert.assertEquals(1,testID);
    }

    @org.junit.Test
    public void testGetbyname(){
        ArrayList<UserDTO> listUsers = new ArrayList<>();
        listUsers.add(new UserDTO(1,"Jasper","van Riel",19,"222jvr@gmail.com"));
        listUsers.add(new UserDTO(2,"Ruben","Bernards",20,"rb@gmail.com"));
        UserDTO testuser = listUsers.get(1);
        String testFirstname = testuser.getFirstName();
        assertEquals("Ruben",testFirstname);

    }

    @Test
    public void setAge(){
        ArrayList<UserDTO> listUsers = new ArrayList<>();
        listUsers.add(new UserDTO(1,"Jasper","van Riel",19,"222jvr@gmail.com"));
        listUsers.add(new UserDTO(2,"Ruben","Bernards",20,"rb@gmail.com"));
        listUsers.get(1).setAge(13);
        int testAge = listUsers.get(1).getAge();

        assertEquals(13,testAge);

    }
}
