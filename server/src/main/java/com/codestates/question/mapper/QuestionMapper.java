package com.codestates.question.mapper;

import com.codestates.member.entity.Member;
import com.codestates.question.dto.QuestionPatchDto;
import com.codestates.question.dto.QuestionPostDto;
import com.codestates.question.dto.QuestionResponseDto;
import com.codestates.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostDtoToQuestion(QuestionPostDto questionPostDto) {
        Question question = new Question();
        Member member = new Member();
        member.setMemberId(questionPostDto.getMemberId());

        question.setMember(member);
        question.setTitle(questionPostDto.getTitle());
        question.setBody(questionPostDto.getBody());

        return question;
    }

    default QuestionResponseDto questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        Member member = question.getMember();
        QuestionResponseDto questionResponseDto = new QuestionResponseDto();

        if ( question.getQuestionId() != null ) {
            questionResponseDto.setQuestionId( question.getQuestionId() );
        }
        questionResponseDto.setTitle( question.getTitle() );
        questionResponseDto.setBody( question.getBody() );
        questionResponseDto.setCreationDate( question.getCreationDate() );
        questionResponseDto.setLastEditDate( question.getLastEditDate() );
//        questionResponseDto.setMember(memberToMemberResponseDto(member));

        return questionResponseDto;
    }

//    default MemberResponseDto memberToMemberResponseDto(Member member) {
//        return member.
//    }

    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
}
