import { PageContent, Params } from "@/types";
import { useParams } from "next/navigation";
import { ComponentType } from "react";
import usePageContent from "./react-query/usePageContent";
import Loading from "@/components/Loading";

type Props = {
  pageContent: PageContent[];
};

export function withPageContent<P extends Props>(
  WrappedComponent: ComponentType<P>
) {
  return function WithPageContentWrapper(props: Omit<P, keyof Props>) {
    const params = useParams<Params>();
    const { data: pageContent } = usePageContent({ language: params.lang });

    if (!pageContent) {
      return <Loading />;
    }

    return <WrappedComponent {...(props as P)} pageContent={pageContent} />;
  };
}
