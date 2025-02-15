import { PageContent, Params } from "@/types";
import { useParams } from "next/navigation";
import { ComponentType } from "react";
import usePageContent from "./react-query/usePageContent";

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
      return <h3>Loading</h3>;
    }

    return <WrappedComponent {...(props as P)} pageContent={pageContent} />;
  };
}
