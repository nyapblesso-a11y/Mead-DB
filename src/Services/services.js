import Api from "./api";

export const getMealCategories = async () => {
  const resp = Api.get("categories.php");
  return resp.json();
};

export const getMealCategory = async (category) => {
  const resp = Api.get("filter.php", {
    searchParams: {
      c: category,
    },
  });

  return await resp.json();
};

export const searchMealByName = async (name) => {
  if (!name) return [];
  const resp = await Api.get("search.php", {
    searchParams: {
      s: name,
    },
  });
  return resp.json();
};

export const getMealDetailById = async (id) => {
  const resp = await Api.get("lookup.php", {
    searchParams: {
      i: id,
    },
  });
  return resp.json();
};
