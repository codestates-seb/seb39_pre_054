package com.codestates.helper;

import org.springframework.restdocs.payload.FieldDescriptor;
import org.springframework.restdocs.payload.JsonFieldType;

import java.util.List;

import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;

public interface QuestionControllerTestHelper extends ControllerTestHelper {
    String MEMBER_URL = "/v1/members";

    default String getUrl() {
        return MEMBER_URL;
    }

    default List<FieldDescriptor> getDefaultMemberResponseDescriptors(DataResponseType dataResponseType) {
        String parentPath = getDataParentPath(dataResponseType);
        return List.of(
                fieldWithPath(parentPath.concat("memberId")).type(JsonFieldType.NUMBER).description("회원 식별자"),
                fieldWithPath(parentPath.concat("name")).type(JsonFieldType.STRING).description("이름"),
                fieldWithPath(parentPath.concat("password")).type(JsonFieldType.STRING).description("비밀번호"),
                fieldWithPath(parentPath.concat("sex")).type(JsonFieldType.STRING).description("성별"),
                fieldWithPath(parentPath.concat("companyName")).type(JsonFieldType.STRING).description("회사명"),
                fieldWithPath(parentPath.concat("companyType")).type(JsonFieldType.NUMBER).description("업종"),
                fieldWithPath(parentPath.concat("companyLocation")).type(JsonFieldType.NUMBER).description("지역")
        );
    }
}
