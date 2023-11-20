export class MovementController {
  constructor ({ movementModel }) {
    this.movementModel = movementModel;
  }

  getByAccount = async (req, res) => {
    const { accountId } = req.params;
    const movements = await this.movementModel.getByAccount({ accountId });
    if (movements) return res.json(movements);
    res.status(404).json({ message: 'Movement not found' });
  };
}
