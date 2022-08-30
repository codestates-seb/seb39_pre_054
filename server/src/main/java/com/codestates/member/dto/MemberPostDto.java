package com.codestates.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
public class MemberPostDto {

    private String name;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;
}