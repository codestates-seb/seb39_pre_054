package com.codestates.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class MemberPostDto {

    private String name;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    private String roles; // User, MANAGER, ADMIN

}