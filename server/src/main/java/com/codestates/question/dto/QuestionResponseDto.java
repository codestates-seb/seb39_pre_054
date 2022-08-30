package com.codestates.question.dto;

import com.codestates.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;
    private long memberId;
    private String title;
    private String body;
    private LocalDateTime creationDate;
    private LocalDateTime lastEditDate;

    public void setMember(Member member) {
        this.memberId = member.getMemberId();
    }
}
