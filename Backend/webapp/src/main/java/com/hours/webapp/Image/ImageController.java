package com.hours.webapp.Image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageController {
    @Autowired
    ImageRepository imageRep;
    @PostMapping("/createImage")
    Image createImage(Image image){
        return  imageRep.save(image);
    }
}
