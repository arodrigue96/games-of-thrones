const createFullName = (firstName: string, lastName?: string): string => {
  const name = lastName ? `${firstName} ${lastName}` : firstName;

  return name;
};

export default createFullName;
