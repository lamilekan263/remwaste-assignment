"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { fetchSkipByLocation, type Skip } from "../api/skipApi";
import type { ApiStatus } from "../api/api";

type SkipContextType = {
  paginatedSkips: Skip[];
  fetchSkipByLocationStatus: ApiStatus;
  selectedSkip: Skip | null;
  handleSelectedSkip: (skip: Skip) => void;
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

const SkipContext = createContext<SkipContextType | undefined>(undefined);

export const SkipProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [fetchSkipByLocationStatus, setFetchSkipByLocationStatus] =
    useState<ApiStatus>("IDLE");

  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const handleSelectedSkip = (skip: Skip) => {
    setSelectedSkip((prev) => (prev === skip ? null : skip));
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const filteredSkips = skips.filter((skip) => {
    const matchesSearch = skip.size
      .toString()
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredSkips.length / itemsPerPage);
  const paginatedSkips = filteredSkips.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  async function initFetchSkipBylocation() {
    try {
      setFetchSkipByLocationStatus("PENDING");
      const response = await fetchSkipByLocation();
      if (response.status !== 200) {
        throw new Error(`API error: ${response.status}`);
      }

      const mappedDataToDto: Skip[] = response.data.map((skipItem: Skip) => ({
        ...skipItem,
        image:
          "https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800",
      }));

      setSkips(mappedDataToDto);
      setFetchSkipByLocationStatus("SUCCESS");
    } catch (error) {
      setFetchSkipByLocationStatus("ERROR");
    }
  }

  useEffect(() => {
    initFetchSkipBylocation();
  }, []);

  const value = {
    paginatedSkips,
    fetchSkipByLocationStatus,
    selectedSkip,
    handleSelectedSkip,
    totalPages,
    currentPage,
    setCurrentPage,
    searchQuery,
    setSearchQuery,
  };

  return <SkipContext.Provider value={value}>{children}</SkipContext.Provider>;
};

export const useSkipContext = () => {
  const context = useContext(SkipContext);
  if (context === undefined) {
    throw new Error("useSkipContext must be used within a SkipProvider");
  }
  return context;
};
