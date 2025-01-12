import React from 'react';
import { Select } from '../../common/Form/Select/Select';

interface ProductFiltersProps {
  filters: {
    category: string;
    priceRange: string;
    sortBy: string;
  };
  onChange: (filters: ProductFiltersProps['filters']) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onChange,
}) => {
  const handleFilterChange = (
    key: keyof ProductFiltersProps['filters'],
    value: string
  ) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <form role="search" aria-label="Product filters">
      <fieldset>
        <legend>Filter Products</legend>

        <Select
          label="Category"
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          options={[
            { value: '', label: 'All Categories' },
            { value: 'electronics', label: 'Electronics' },
            { value: 'clothing', label: 'Clothing' },
          ]}
        />

        <Select
          label="Price Range"
          value={filters.priceRange}
          onChange={(e) => handleFilterChange('priceRange', e.target.value)}
          options={[
            { value: '', label: 'All Prices' },
            { value: '0-50', label: 'Under $50' },
            { value: '50-100', label: '$50 - $100' },
            { value: '100+', label: 'Over $100' },
          ]}
        />

        <Select
          label="Sort By"
          value={filters.sortBy}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          options={[
            { value: 'name', label: 'Name' },
            { value: 'price-asc', label: 'Price: Low to High' },
            { value: 'price-desc', label: 'Price: High to Low' },
          ]}
        />
      </fieldset>
    </form>
  );
};