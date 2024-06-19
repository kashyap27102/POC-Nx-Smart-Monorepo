export const getSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/skills`);
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSoftSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/soft-skills`);
    const result = await res.json();
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
