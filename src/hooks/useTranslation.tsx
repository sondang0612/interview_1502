import { PageContent, Params } from "@/types";
import { useParams } from "next/navigation";
import usePageContent from "./react-query/usePageContent";

const useGetPageContentByParams = (): { pageContent: PageContent | null } => {
  const params = useParams<Params>();

  const { data: pageContents } = usePageContent({
    language: params?.lang,
  });

  return {
    pageContent:
      pageContents && pageContents.length > 0 ? pageContents[0] : null,
  };
};

export default useGetPageContentByParams;
