"use client";

import axiosInstance from "@/libs/axiosInstance";
import { PageContent } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { queryKey } from "./queryKey";

const fetcher = async ({ language }: { language?: string }) => {
  const { data } = await axiosInstance.get(`/pages?lang=${language}`);
  return data;
};

const usePageContent = ({
  language,
}: {
  language: string;
}): UseQueryResult<PageContent[], Error> => {
  return useQuery({
    queryKey: [queryKey.PAGE_CONTENT, language],
    queryFn: () => fetcher({ language }),
    enabled: !!language,
  });
};

export default usePageContent;
