export interface ResearchTocItem {
  /**
   * Anchor ID used for page navigation
   *
   * Example:
   * #introduction
   */
  id: string;


  /**
   * Display order number
   *
   * Example:
   * 01, 02, 03
   */
  number: string;


  /**
   * Section heading
   *
   * Example:
   * Introduction
   */
  title: string;


  /**
   * Short explanation shown in table of contents
   */
  description?: string;
}


export type ResearchToc = ResearchTocItem[];