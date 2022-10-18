package com.example.demo.Student;

import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class StudentService {

    public List<Student> GetStudents(){
        return
//        List.of(new Student(
//                        1L,
//                        "Jasper",
//                        "222jvr@gmai;.com",
//                        LocalDate.of(2003, Month.JUNE,27),
//                        19
//
//                ),
//                new Student(
//                        2L,
//                        "Petra",
//                        "222jvr@gmai;.com",
//                        LocalDate.of(2003, Month.JUNE,27),
//                        19
//
//                ));
    }
}
