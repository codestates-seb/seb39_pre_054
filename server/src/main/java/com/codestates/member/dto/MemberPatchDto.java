package com.codestates.member.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class MemberPatchDto {

    private Long memberId;

    private String name;

    private String password;

}
