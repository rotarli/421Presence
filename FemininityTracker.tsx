
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const traits = {
  "Open-Mindedness": [
    "Welcomed new ideas without judgment",
    "Challenged a belief",
    "Stayed curious despite surprise"
  ],
  "Mindfulness": [
    "Present during physical actions",
    "Paused before reacting",
    "Aware of self-talk"
  ],
  "Peaceful Environment": [
    "Created outer calm",
    "Inner state undisturbed",
    "Removed self from noise/conflict"
  ],
  "Active Listening": [
    "Listened without interrupting",
    "Listened to my body",
    "Validated someone’s words"
  ],
  "Receptivity": [
    "Number of Yeses",
    "Number of Noes",
    "What I received"
  ],
  "Nourishment": [
    "What I gave back",
    "Best thing I received this week",
    "Transformed discipline into gift"
  ]
};

export default function FemininityTracker() {
  const [scores, setScores] = useState({});
  const [notes, setNotes] = useState({});

  const updateScore = (trait, index, value) => {
    const key = `${trait}-${index}`;
    setScores({ ...scores, [key]: value });
  };

  const updateNote = (trait, value) => {
    setNotes({ ...notes, [trait]: value });
  };

  return (
    <div className="p-4 grid gap-4">
      {Object.entries(traits).map(([trait, questions]) => (
        <Card key={trait}>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-lg font-bold">{trait}</h2>
            {questions.map((q, i) => (
              <div key={i} className="flex items-center gap-2">
                <label className="w-2/3 text-sm">{q}</label>
                <Input
                  type="number"
                  min={0}
                  max={3}
                  className="w-16"
                  value={scores[`${trait}-${i}`] || ""}
                  onChange={(e) => updateScore(trait, i, e.target.value)}
                />
              </div>
            ))}
            <Textarea
              placeholder="Keyword, sentence or summary..."
              value={notes[trait] || ""}
              onChange={(e) => updateNote(trait, e.target.value)}
            />
          </CardContent>
        </Card>
      ))}
      <Button className="mt-4">Save Day’s Report</Button>
    </div>
  );
}
