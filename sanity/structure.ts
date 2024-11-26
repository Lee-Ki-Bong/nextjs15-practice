import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content") // Sanity Studio 사이드바에 "Content"라는 제목의 그룹이 생성
    .items([
      S.documentTypeListItem("author").title("Authors"), // 그 안에 "Authors"라는 항목이 표시, 관리할 수 있도록 함
      S.documentTypeListItem("startup").title("Startups"),
    ]);
