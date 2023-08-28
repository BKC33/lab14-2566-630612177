"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg" />
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        minRows={3}
        mt="xs"
      />
      <Button color="orange" mt="xs">
        Submit Review
      </Button>

      <Divider mt="sm" />

      <Group position="center">
        <Title order={4} mt="sm">
          Elon Musk
        </Title>
        <Rating defaultValue={5} size="sm" mt="sm" readOnly />
      </Group>
      <Text ta="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider mt="sm" />

      <Group position="center">
        <Title order={4} mt="sm">
          Mark Zuck
        </Title>
        <Rating defaultValue={4} size="sm" mt="sm" readOnly />
      </Group>
      <Text ta="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination
        mt="md"
        position="center"
        total={20}
        color="orange"
      ></Pagination>

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Khachen Chaiyo 630612177
      </Text>
    </Container>
  );
}
