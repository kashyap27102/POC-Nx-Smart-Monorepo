export const getSkills = async () => {
  try {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/skills`);
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSoftSkills = async () => {
  try {
    const res = await fetch(`${process.env.SERVER_BASE_URL}/soft-skills`);
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
