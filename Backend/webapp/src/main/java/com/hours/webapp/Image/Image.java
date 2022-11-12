package com.hours.webapp.Image;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Arrays;

@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(
            name = "imageData"
    )
    private byte[] image;
    @Column(
            name = "Bio",
            columnDefinition = "TEXT"
    )
    private String Bio;
    public Image() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public byte[] getImage() {
        return image;
    }

    public String getBio() {
        return Bio;
    }

    public void setBio(String bio) {
        Bio = bio;
    }

    @Override
    public String toString() {
        return "Image{" +
                "id=" + id +
                ", image=" + Arrays.toString(image) +
                ", Bio='" + Bio + '\'' +
                '}';
    }
}
