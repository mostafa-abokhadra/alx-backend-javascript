export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const val = mathFunction();
    queue.push(val);
  } catch (err) {
    queue.push(err);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
