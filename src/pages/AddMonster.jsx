import React, { useState } from "react";
import { createMonster } from "../api/classService";

const AddMonster = () => {
  const [form, setForm] = useState({
    monsterName: "",
    monsterImage: null,
    abilities: "",
    description: "",
    level: 0,
    health: 0,
    maxHealth: 0,
    mana: 0,
    maxMana: 0,
    rank: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setForm({ ...form, monsterImage: reader.result });
    };
    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMonster({
        ...form,
        level: Number(form.level),
        health: Number(form.health),
        maxHealth: Number(form.maxHealth),
        mana: Number(form.mana),
        maxMana: Number(form.maxMana),
      });
      alert("Monster created successfully!");
    } catch (error) {
      console.error(error.response || error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="monsterName" placeholder="Name" onChange={handleChange} />
      <input type="file" onChange={handleFileChange} />
      <input name="abilities" placeholder="Abilities" onChange={handleChange} />
      <input
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <input name="level" type="number" onChange={handleChange} />
      <input name="health" type="number" onChange={handleChange} />
      <input name="maxHealth" type="number" onChange={handleChange} />
      <input name="mana" type="number" onChange={handleChange} />
      <input name="maxMana" type="number" onChange={handleChange} />
      <input name="rank" placeholder="Rank" onChange={handleChange} />
      <button type="submit">Create Monster</button>
    </form>
  );
};

export default AddMonster;
