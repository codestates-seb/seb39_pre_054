package com.codestates.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class MemberResponseDto {

    private long memberId;

    private String name;

    private String email;

    private LocalDateTime creation_date;

    private LocalDateTime last_edit_date;

    private String roles; // User, MANAGER, ADMIN // 추가

}



