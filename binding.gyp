{
  'targets': [
    {
      'target_name': 'crypt',
      'sources': [ 'crypt.cc' ],
      'conditions': [
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
