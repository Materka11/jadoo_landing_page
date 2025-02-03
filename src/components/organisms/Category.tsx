import { CategoryCard } from '../atoms/CategoryCard';
import { PlaneWithRectangleIcon } from '../atoms/PlaneWithRectangleIcon';

export const Category = () => {
  return (
    <section>
      <CategoryCard
        Icon={PlaneWithRectangleIcon}
        title="Best Flights"
        description="Engrossed listening. Park gate sell they west hard for the."
      />
    </section>
  );
};
